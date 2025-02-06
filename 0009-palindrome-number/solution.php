class Solution {

    /**
     * @param Integer $x
     * @return Boolean
     */
    function isPalindrome($x) {
        if ($x < 0) {
            return false;
        }

        $reverse = 0;
        $temp = $x;

        while ($temp != 0) {
            $reverse = ($reverse * 10) + ($temp % 10);
            $temp = floor($temp / 10);
        }
        
        return $reverse === $x;
    }
}
