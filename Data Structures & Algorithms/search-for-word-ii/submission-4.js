

class Solution {
     // Build a Trie: each node has 'children' and 'word' (non-null if a word ends here)
  buildTrie(words) {
    const root = { children: Object.create(null), word: null };
    for (const w of words) {
      let node = root;
      for (const ch of w) {
        if (!node.children[ch]) {
          node.children[ch] = { children: Object.create(null), word: null };
        }
        node = node.children[ch];
      }
      node.word = w; // mark end of word
    }
    return root;
  }

  findWords(board, words) {
    if (!board || board.length === 0 || board[0].length === 0) return [];

    const m = board.length;
    const n = board[0].length;
    const root = this.buildTrie(words);
    const res = new Set();
    const visited = Array.from({ length: m }, () => Array(n).fill(false));

    const dirs = [
      [1, 0], [-1, 0], [0, 1], [0, -1]
    ];

    const dfs = (r, c, node) => {
      const ch = board[r][c];
      const next = node && node.children ? node.children[ch] : null;
      if (!next) return;

      // If this path completes a word, record it
      if (next.word) {
        res.add(next.word);
        // Prune to avoid duplicates; optional but helps performance
        next.word = null;
      }

      visited[r][c] = true;
      for (const [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < m && nc >= 0 && nc < n && !visited[nr][nc]) {
          dfs(nr, nc, next);
        }
      }
      visited[r][c] = false;
    };

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        dfs(i, j, root);
      }
    }

    return Array.from(res);
  }
}












