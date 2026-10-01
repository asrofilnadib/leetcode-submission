# leetcode-submission

Repo ini nyimpen solusi **LeetCode** yang statusnya **Accepted**, di-sync otomatis dari akun LeetCode ke GitHub.

Sync pakai [LeetCode Sync](https://github.com/marketplace/actions/leetcode-sync) (`joshcai/leetcode-sync`).

## Setup (sekali)

1. **Secrets** di repo (Settings → Secrets and variables → Actions):
   - `LEETCODE_CSRF_TOKEN` — nilai cookie `csrftoken` (login leetcode.com → DevTools → Application/Cookies atau header request).
   - `LEETCODE_SESSION` — nilai cookie `LEETCODE_SESSION`.

   Jangan commit cookie ke git. Kalau pernah kebocor, logout/login LeetCode dan update secret.

2. **Workflow permissions**: Settings → Actions → General → *Workflow permissions* → **Read and write permissions**.

3. Jalankan workflow: tab **Actions** → **Sync LeetCode** → **Run workflow**.

Cron default: Sabtu 08:00 UTC (bisa diubah di `.github/workflows/sync_leetcode.yml`).

## Isi repo

Setelah sync jalan, file solusi muncul di root repo (atau folder `destination-folder` kalau kamu set di workflow).

## NeetCode

Repo terpisah: [neetcode-submissions](https://github.com/asrofilnadib/neetcode-submissions) (sync dari NeetCode, bukan action ini).
