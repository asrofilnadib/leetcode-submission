class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
      $map = [];

      for ($i = 0; $i < count($nums); $i++) {
        $angkaPelengkap = $target - $nums[$i];
        if (isset($map[$angkaPelengkap])) {
            return [$map[$angkaPelengkap], $i];
        }
        $map[$nums[$i]] = $i;
      }
      return null;
    }
}
