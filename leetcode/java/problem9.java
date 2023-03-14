class Solution {
    public boolean isPalindrome(int x) {
        String stringX = Integer.toString(x);
        String reversedX = "";
        char ch;

        for (int i=0; i<stringX.length(); i++) {
        ch= stringX.charAt(i);
        reversedX = ch + reversedX;
      }

      if(reversedX.equals(stringX)) {
          return true;
      } else {
          return false;
      }

    }
}