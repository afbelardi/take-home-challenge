# Take-home-challenge

## Instructions
1. Create a JavaScript File in your own repository do not fork this repo (automatic disqualification)
1. Add `arthurbernierjr` as a collaborator on your repo and make it private
1. Solve each challenge and each extension (Each Challenge should correspond with a git commit <br/> and each extension commit should reference the challenge it extends)
1. Create a ReadMe file in the same repo with your js submission, add your cover letter and any information you want to share with me there.
1. When done create a Git Issue here on this repo, with your name and position applying for, as well as a link to your repo.



  <h3>Challenge 1</h3>

  Create a function <code>addTwo</code> that accepts one input and adds 2 to it.



  <h3>Challenge 2</h3>

  Create a function <code>addS</code> that accepts one input and adds an "s" to it.



  <h3>Challenge 3</h3>
  Create a function called <code>map</code> that takes two inputs:<br>
  <ol>
    <li>an array of numbers (a list of numbers)</li>
    <li>a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')</li>
  </ol>

  Have <code>map</code> return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.<br>
  <!--
    map([1,2,3,4,5], multiplyByTwo); //-> [2,4,6,8,10]
    multiplyByTwo(1); //-> 2
    multiplyByTwo(2); //-> 4
  -->
  <pre style="color:#000000;background:#ccc;">map<span style="color:#808030; ">(</span><span style="color:#808030; ">[</span><span style="color:#008c00; ">1</span><span style="color:#808030; ">,</span><span style="color:#008c00; ">2</span><span style="color:#808030; ">,</span><span style="color:#008c00; ">3</span><span style="color:#808030; ">,</span><span style="color:#008c00; ">4</span><span style="color:#808030; ">,</span><span style="color:#008c00; ">5</span><span style="color:#808030; ">]</span><span style="color:#808030; ">,</span> multiplyByTwo<span style="color:#808030; ">)</span><span style="color:#800080; ">;</span> <span style="color:#696969; ">//-&gt; [2,4,6,8,10]</span><br>multiplyByTwo<span style="color:#808030; ">(</span><span style="color:#008c00; ">1</span><span style="color:#808030; ">)</span><span style="color:#800080; ">;</span> <span style="color:#696969; ">//-&gt; 2</span><br>multiplyByTwo<span style="color:#808030; ">(</span><span style="color:#008c00; ">2</span><span style="color:#808030; ">)</span><span style="color:#800080; ">;</span> <span style="color:#696969; ">//-&gt; 4</span>
  </pre>



  <h3>Challenge 4</h3>

  The function <code>forEach</code> takes an array and a callback, and runs the callback on each element of the array. <code>forEach</code> does not return anything.

  ```js
    let alphabet = '';
    const letters = ['a', 'b', 'c', 'd'];
    forEach(letters, function(char) {
      alphabet += char;
    });
    console.log(alphabet);   //prints 'abcd'
 ```
  <pre style="color:#000000;background:#ccc;"><span style="color:#800000; font-weight:bold; ">let</span> alphabet <span style="color:#808030; ">=</span> <span style="color:#800000; ">'</span><span style="color:#800000; ">'</span><span style="color:#800080; ">;</span>
<span style="color:#800000; font-weight:bold; ">const</span> letters <span style="color:#808030; ">=</span> <span style="color:#808030; ">[</span><span style="color:#800000; ">'</span><span style="color:#0000e6; ">a</span><span style="color:#800000; ">'</span><span style="color:#808030; ">,</span> <span style="color:#800000; ">'</span><span style="color:#0000e6; ">b</span><span style="color:#800000; ">'</span><span style="color:#808030; ">,</span> <span style="color:#800000; ">'</span><span style="color:#0000e6; ">c</span><span style="color:#800000; ">'</span><span style="color:#808030; ">,</span> <span style="color:#800000; ">'</span><span style="color:#0000e6; ">d</span><span style="color:#800000; ">'</span><span style="color:#808030; ">]</span><span style="color:#800080; ">;</span>
forEach<span style="color:#808030; ">(</span>letters<span style="color:#808030; ">,</span> <span style="color:#800000; font-weight:bold; ">function</span><span style="color:#808030; ">(</span><span style="color:#800000; font-weight:bold; ">char</span><span style="color:#808030; ">)</span> <span style="color:#800080; ">{</span>
  alphabet <span style="color:#808030; ">+=</span> <span style="color:#800000; font-weight:bold; ">char</span><span style="color:#800080; ">;</span>
<span style="color:#800080; ">}</span><span style="color:#808030; ">)</span><span style="color:#800080; ">;</span>
console<span style="color:#808030; ">.</span><span style="color:#800000; font-weight:bold; ">log</span><span style="color:#808030; ">(</span>alphabet<span style="color:#808030; ">)</span><span style="color:#800080; ">;</span>   <span style="color:#696969; ">//prints 'abcd'</span>
</pre>


  <h3>Extension 1</h3>

  In the first part of the extension, you're going to rebuild <code>map</code> as <code>mapWith</code>. This time you're going to use <code>forEach</code> inside of <code>mapWith</code> instead of using a <code>for</code> loop.


  <h3>Extension 2</h3>

  The function <code>reduce</code> takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.

 ```js
    const nums = [4, 1, 3];
    const add = function(a, b) { return a + b; }
    reduce(nums, add, 0);   //-> 8
  ```
  <pre style="color:#000000;background:#ccc;"><span style="color:#800000; font-weight:bold; ">const</span> nums <span style="color:#808030; ">=</span> <span style="color:#808030; ">[</span><span style="color:#008c00; ">4</span><span style="color:#808030; ">,</span> <span style="color:#008c00; ">1</span><span style="color:#808030; ">,</span> <span style="color:#008c00; ">3</span><span style="color:#808030; ">]</span><span style="color:#800080; ">;</span>
<span style="color:#800000; font-weight:bold; ">const</span> add <span style="color:#808030; ">=</span> <span style="color:#800000; font-weight:bold; ">function</span><span style="color:#808030; ">(</span>a<span style="color:#808030; ">,</span> b<span style="color:#808030; ">)</span> <span style="color:#800080; ">{</span> <span style="color:#800000; font-weight:bold; ">return</span> a <span style="color:#808030; ">+</span> b<span style="color:#800080; ">;</span> <span style="color:#800080; ">}</span>
reduce<span style="color:#808030; ">(</span>nums<span style="color:#808030; ">,</span> add<span style="color:#808030; ">,</span> <span style="color:#008c00; ">0</span><span style="color:#808030; ">)</span><span style="color:#800080; ">;</span>   <span style="color:#696969; ">//-&gt; 8</span>
</pre>

  Here's how it works. The function has an "accumulator value" which starts as the <code>initialValue</code> and accumulates the output of each loop. The array is iterated over, passing the accumulator and the next array element as arguments to the <code>callback</code>. The callback's return value becomes the new accumulator value. The next loop executes with this new accumulator value. In the example above, the accumulator begins at 0. <code>add(0,4)</code> is called. The accumulator's value is now 4. Then <code>add(4, 1)</code> to make it 5. Finally <code>add(5, 3)</code> brings it to 8, which is returned.
  


  <h3>Extension 3</h3>

  Construct a function <code>intersection</code> that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!

  ```js 
  console.log(intersection([5, 10, 15, 20, 10], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
  should log: [15, 5] 
  ```



  <h3>Extension 4</h3>

  Construct a function <code>union</code> that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce!

  ```js 
  console.log(union([5, 10, 15, 5], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5])); //should log: [5, 10, 15, 88, 1, 7, 100]
  ```


  <h3>Extension 5</h3>

  Construct a function <code>objOfMatches</code> that accepts two arrays and a callback. <code>objOfMatches</code> will build an object and return it. To build the object, <code>objOfMatches</code> will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.

```js
console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], 
['HI', 'Howdy', 'BYE', 'LATER', 'hello'], 
function(str) { return str.toUpperCase(); })); // should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }
```



  <h3>Extension 6</h3>

  Construct a function <code>multiMap</code> that will accept two arrays: an array of values and an array of callbacks. <code>multiMap</code> will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

  ```js
console.log(mutiMap(['catfood', 'glue', 'beer'], [
function(str) { return str.toUpperCase(); }, 
function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, 
function(str) { return str + str; }
]));
 // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
 ```



  <h3>Extension 7</h3>

  Construct a function <code>objectFilter</code> that accepts an object as the first parameter and a callback function as the second parameter. <code>objectFilter</code> will return a new object. The new object will contain only the properties from the input object such that the property's value is equal to the property's key passed into the callback.
```js
console.log(objectFilter({ me: 'ME', you: 'you', them: 'THEM' }, (key) => key.toUpperCase()))
// should log {me: 'ME', them: 'THEM'}
```


  <h3>Challenge 5 </h3>
  Construct a json api with the ExpressJS Framework. You will not use a database. You will mock a database of blogposts in a seperate JS file with the following starter data 


```js
const mockBlog = [
    {
        id: 1,
        title: 'First Blog Post',
        description: 'My first blog post!'
    },
    {
        id: 2,
        title: 'Second Blog Post',
        description: 'My Second blog post!'
    },
    {
        id: 3,
        title: 'Third Blog Post',
        description: 'My Third blog post!'
    }
];
module.exports = mockBlog
```
### The json API should
1. Have an Index, Create, Show route using paths (/blog and /blog/:id) Delete and Update not necessary
1. Run on port 3008
1. Accept JSON data not urlencoded data
1. Be testible by me via postman

### Extension 8
Use some of your functions in your JSON API via importing/requiring them into your Json API and making additional routes, for example a search route (be creative)

### Extension 9
Deploy it to Heroku ( add a primary `/` path that sends html to the user describes each route and what type of data to send it)
