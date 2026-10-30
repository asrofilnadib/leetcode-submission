func countSubstrings(s string) int {
    if len(s) < 1 {
        return 0
    }

    count, n := 0, len(s)

    for center := 0; center < 2*n-1; center++ {
        l := center/2
        r := l+center%2
        for l >= 0 && r < n && s[l] == s[r] {
            count++
            l-=1
            r+=1
        }
    }

    return count
}
