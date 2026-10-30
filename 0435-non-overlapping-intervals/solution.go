func eraseOverlapIntervals(intervals [][]int) int {
    if len(intervals) <= 1 {
        return 0
    }

    sort.Slice(intervals, func(i, j int) bool {
        return intervals[i][1] < intervals[j][1]
    })

    remove := 0;
    lastEnd := intervals[0][1]

    for i := 1; i < len(intervals); i++ {
        start, end := intervals[i][0], intervals[i][1]
        if start >= lastEnd {
            lastEnd = end
        } else {
            remove++
        }
    }

    return remove
}
