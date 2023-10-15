---    
    icon: pen-to-square
    date: 2018-08-08
    category: 
      - 算法
    tag:
      - 随笔
---

#### MD5 加密：

```js
<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/md5.js"></script>
<script>
    var hash = CryptoJS.MD5("Message");
</script>
```

#### SHA1 加密

```js
<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/sha1.js"></script>
<script>
    var hash = CryptoJS.SHA1("Message");
</script>

```

#### SHA2 加密

```js
<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/sha256.js"></script>
<script>
    var hash = CryptoJS.SHA256("Message");
</script>

```

### Progressive Hashing

```js
<script src="http://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/sha256.js"></script>
<script>
    var sha256 = CryptoJS.algo.SHA256.create();

    sha256.update("Message Part 1");
    sha256.update("Message Part 2");
    sha256.update("Message Part 3");

    var hash = sha256.finalize();
</script>

```
