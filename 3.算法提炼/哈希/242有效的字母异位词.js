/**
 * leetcode 242
 * 有效的字母异位词：词中的字母一样只是顺序不一样
 * s = "anagram", t = "nagaram" 输出true
 * 
 * s = rat ,t=car 则输出false
 * 解题思路一，将两个字符串进行排序，然后比较是否相等
 * 思路二： 将字符串以map的形式存储，Key：数量，然后比较两个map
 * 
 */
