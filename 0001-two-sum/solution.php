class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    //  $num = [3,2,4] 
    // $compliment = $target - $num[i]
    // 6 - 3 = 3, gada di $map maka tambahin $num[0] ke dalam $map jadi [3 => 0]
    // 6 - 2 = 4, gada di $map maka tambahin $num[1] ke dalam $map jadi [3 => 0, 2 => 1]
    // 6 - 4 = 2, eh ternyata ada di $map[1]  
    function twoSum($nums, $target) {
        $map = [];

        foreach ($nums as $index => $num) {
            $numToIndex = $target - $num;
            if (isset($map[$numToIndex])) {
                return [$map[$numToIndex], $index];
            }
            $map[$num] = $index; 
        }
    }
}
