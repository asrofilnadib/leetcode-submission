func searchMatrix(matrix [][]int, target int) bool {
    if len(matrix) == 0 {
        return false
    }

    m, n := len(matrix), len(matrix[0])
    r, c := 0, n-1

    for r < m && c >= 0 {
        val := matrix[r][c]

        if target == val {
            return true
        }

        if target < val {
            c--
        } else {
            r++
        }
    }

    return false
}
