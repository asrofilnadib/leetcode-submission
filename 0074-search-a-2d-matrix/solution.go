func searchMatrix(matrix [][]int, target int) bool {
    if len(matrix) == 0 {
        return false
    }

    m, n := len(matrix), len(matrix[0])
    
    low, high := 0, m*n-1

    for low <= high {
        mid := (low + high) / 2
        val := matrix[mid/n][mid%n]

        if target < val {
            high = mid - 1
        } else if target > val {
            low = mid + 1
        } else {
            return true
        }
    }

    return false
}
