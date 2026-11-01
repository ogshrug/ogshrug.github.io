// Encrypts cm.links.json (gitignored, plaintext) into src/data/cm.enc.json (committed).
// Usage: npm run cm            (prompts for password)
//        CM_PASSWORD=... npm run cm
// The page at /cm decrypts it in the browser with the same password.
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { webcrypto as crypto } from 'node:crypto'
import readline from 'node:readline'

const SRC = 'cm.links.json'
const OUT = 'src/data/cm.enc.json'
const ITER = 600_000

if (!existsSync(SRC)) {
  writeFileSync(
    SRC,
    JSON.stringify(
      [
        { group: 'Drive', title: 'Example folder', url: 'https://drive.google.com/...' },
        { group: 'Docs', title: 'Example doc', url: 'https://docs.google.com/...', note: 'optional' },
      ],
      null,
      2,
    ) + '\n',
  )
  console.log(`Created ${SRC}. Fill in your links, then run this again.`)
  process.exit(0)
}

// Forgive the usual hand-editing slips: missing commas between entries, trailing commas.
const raw = readFileSync(SRC, 'utf8')
  .replace(/\}(\s*)\{/g, '},$1{')
  .replace(/,(\s*[\]}])/g, '$1')
  .replace(/\]\s*,\s*$/, ']')
let links
try { links = JSON.parse(raw) } catch (e) {
  console.error(`${SRC} isn't valid JSON: ${e.message}`)
  process.exit(1)
}
if (!Array.isArray(links)) throw new Error(`${SRC} must be a JSON array`)

function ask(q) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true })
  rl._writeToOutput = (s) => { if (s.startsWith(q)) rl.output.write(q) }
  return new Promise((res) => rl.question(q, (a) => { rl.close(); process.stdout.write('\n'); res(a) }))
}

let password = process.env.CM_PASSWORD
if (!password) {
  password = await ask('Password: ')
  if ((await ask('Confirm:  ')) !== password) { console.error('Passwords do not match.'); process.exit(1) }
}
if (password.length < 12) { console.error('Use at least 12 characters: the ciphertext is public.'); process.exit(1) }

const enc = new TextEncoder()
const salt = crypto.getRandomValues(new Uint8Array(16))
const iv = crypto.getRandomValues(new Uint8Array(12))
const base = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveKey'])
const key = await crypto.subtle.deriveKey(
  { name: 'PBKDF2', salt, iterations: ITER, hash: 'SHA-256' },
  base,
  { name: 'AES-GCM', length: 256 },
  false,
  ['encrypt'],
)
const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(JSON.stringify(links)))
const b64 = (u) => Buffer.from(u).toString('base64')

writeFileSync(OUT, JSON.stringify({ v: 1, iter: ITER, salt: b64(salt), iv: b64(iv), ct: b64(new Uint8Array(ct)) }) + '\n')
console.log(`Encrypted ${links.length} link(s) -> ${OUT}. Commit that file; never commit ${SRC}.`)
