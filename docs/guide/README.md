# [ግዕዝ / Ge'ez (beta)](https://code.marda.studio)

Geez is an amharic programming language which is built on top of JavaScript. An online IDE is also provided [here](https://code.marda.studio). Geez is simple to use language with handful of features.

#

## Variables

#

Are used to store information on the memory by refering them with their corresponding name.

```
# ስም("አበበ") -> ሐረግ
ስም = "አበበ"፤

# አድሜ(21) -> ቁጥር
እድሜ = 21፤

# ተማሪ_ነው(true) -> አውነታ
ተማሪ_ነው = አውነት፤

# አግብቷል(false) -> አውነታ
አግብቷል = ሀሰት፤

# ውጤት(0 1 2 3 4 5 ...) -> ሰልፍ
ውጤት = ሰልፍ(88፣ 90፣ 79፣ 100፣ 100)፤
```

`Functions are also declared as a variable like below`

```
ስም_ከነ_አባት = ስራ (ስም፣ አባት)
{
	ፃፍ("መረጃ")፤
	ፃፍ("ስም፥ "፣ ስም)፤
    ፃፍ("የአባት ስም፥ "፣ አባት)፤
}፤

ስም_ከነ_አባት("ናትናኤል"፣ "ብርሀኑ")፤
```

```
		መረጃ
		ስም፥  ናትናኤል
		የአባት ስም፥  ብርሀኑ
```

#

## Comments

#

Any text written as `#`+ `String` is ignored and wouldn't affect the program.

```
######################################
# እዚህ ጋር የትፃፈው ምንም ለውጥ የለውም። #
######################################
```

#

## Expression

#

Everything on the program is an expression and is ended by the symbol `፤`

```
ፃፍ("1")፤    # Expression 1
ፃፍ("2")፤	# Expression 2
ፃፍ("3")፤	# Expression 3
```

Expressions can also be nested inside a function which contains a block of expressions inside curly braces `{ Body }`

#

## Operators

#

Operators are special tokens that represent computations like addition, multiplication, power, division and the modulus(reminder).

```
ፃፍ(2 + 3)፤
ፃፍ(2 - 3)፤
ፃፍ(2 * 3)፤
ፃፍ(3 / 2)፤
ፃፍ(2 ** 3)፤
ፃፍ(3 % 2)፤
```

#

## Functions

#

```
ስራ = ስራ ()
	{
		ፃፍ("1")፤    # Expression 1
		ፃፍ("2")፤	# Expression 2
		ፃፍ("3")፤	# Expression 3
	}፤

ስራ()፤
```

Functions are blocks of code which can be executed after defining using `ስራ`

Functions can have arguments inside the parentheses.

```
ደምር_7 = ስራ (ሀ)
	{
		ፃፍ(ሀ + 7)፤
    }፤

ደምር_7(12)፤
```

Can also have multiple arguments separated by comma or `፣`

```
ደምር = ስራ (ሀ፣ ለ)
	{
		ፃፍ(ሀ + ለ)፤
	}፤

ደምር(4፣ 5)፤
ደምር(1231፣ 41151)፤
```

#

## Conditional Statements

#

Conditional Statements are expressions with the keyword `ከሆነ` and `ካልሆነ` which controls the flow of execuiton by checking an expression which results in executing block.

```
እድሜ = 20፤

ከሆነ (እድሜ < 18) {
	ፃፍ("ልጅ።")፤
} ካልሆነ {
	ፃፍ("ወጣት")፤
}፤
```

```
ስም = "አበበ"፤
# እድሜ = 59፤
# እድሜ = 61፤
እድሜ = 17፤

ከሆነ ((እድሜ > 18) && (እድሜ < 60))
	ከዛ ፃፍ(ስም፣ "መንዳት ይችላሉ።")
ካልሆነ ከሆነ (እድሜ > 60)
	ከዛ ፃፍ(ስም፣ "ይቅርታ ግን ምንም ማረግ አይችሉም።")
ካልሆነ ከሆነ (እድሜ < 18)
	ከዛ ፃፍ(ስም፣ "አንቺማ ፈላ ነሽ።")፤


```

Conditionals can also be stated one line such that if the condition is true

```
True 										False
ከሆነ (Condition) ከዛ (Expression) 			ካልሆነ (Expression)፤
```

```
ፊብ = ስራ (ሀ) { ከሆነ ሀ < 2 ከዛ ሀ ካልሆነ ፊብ(ሀ - 1) + ፊብ(ሀ-2) }፤
ፃፍ(ፊብ(7))፤
```

#

## Loops

#

Loops can be implemented recursively

```
ዘርዝር = ስራ (ሀ፣ ለ)
		{
        	ፃፍ(ሀ)፤
        	ከሆነ (ሀ < ለ) {
            	ዘርዝር(ሀ + 1፣ ለ)፤
            }፤
       	}፤
ዘርዝር(1፣ 10)፤
```

#

## The let keyword (ሰይም)

#

This is a keword for creating variables inside a function or they are used to create a named scope.

```
ደምር5 = ስራ(ሀ) {
  	ሰይም (ለ = 5) {
      	ፃፍ(ሀ + ለ)፤
      }፤
  }፤

ደምር5(9)፤
```

We can create a loop using the let keyword as follows

```

ሰይም ዝርዝር (ሀ = 0)
	{
		ከሆነ ሀ <= 2 {
			ፃፍ(ሀ)፤
			ዝርዝር(ሀ +1)፤
		}፤
	}፤
```

```
ደጋግም = ስራ(ስንት፣ ስ){
	ሰይም ዝርዝር (ሀ = 0)
	{
		ከሆነ ሀ <= ስንት {
			ስ()፤
			ዝርዝር(ሀ +1)፤
		}፤
	}፤
}፤
```

#

## Arrays and Linked List

#

There are only three functions which can be used to manipulate an array
Arrays can be created by using

```
የሰፍል-ስም = ሰልፍ(  items   ) ####### Separated by comma
```

To access an item from the array, we use

```
ከሰልፍ(  የሰፍል-ስም,  ጠቋሚ)  ######
```

Length

```
ርዝመት( የሰፍል-ስም )
```

To change an item's value

```
ሰልፍ! (የሰፍል-ስም ,  ጠቋሚ,  አዲስ)
```

Example code

```
ከአንድ-አስር = ሰልፍ(1፣ 2፣ 3፣ 4፣ 5፣ 6፣ 7፣ 8፣ 9፣ 10)፤
ፃፍ(ርዝመት(ከአንድ-አስር)፤
አምስተኛው = ከሰልፍ(ከአንድ-አስር፣ 4)፤
ሰልፍ!(ከአንድ-አስር፣ 4፣ 6)፤
ወደስድስት =ከሰልፍ(ከአንድ-አስር፣ 4)፤
ፃፍ(ከአንድ-አስር)፤
ፃፍ(አምስተኛው)፤
ፃፍ(ወደስድስት)፤

#################################
1,2,3,4,6,6,7,8,9,10
5
6
################################
```

There is also linked list like lisp(cat and cdr)
We create linked list using the function which only takes 2 values

```
ሀ = ክፍል("መጀመሪያ"፣ "ቀጣይ")፤
```

To access the first one we use the function

```
ብጀ(ሀ) # መጀመሪያ
```

To access the second one we use

```
ብቀ(ለ) # ቀጣይ
```

We can build complex functions using the above

```
ዘርዝር = ስራ(ሀ፣ ለ)
 			ከሆነ ሀ <= ለ ከዛ ክፍል(ሀ፣ ዘርዝር(ሀ+1፣ ለ)) ካልሆነ ባዶ፤

ለያንዳንዱ = ስራ(ክፍሎች፣ ስ)
			ከሆነ (ክፍሎች != ባዶ){
            	ስ(ብጀ(ክፍሎች))፤
                ለያንዳንዱ(ብቀ(ክፍሎች)፣ ስ)፤
            }፤
ለያንዳንዱ(ዘርዝር(1፣20)፣ ፃፍ)፤
```

#

## Extra

#

```
ደጋግም = ስራ(ስንት፣ ስ){
	ሰይም ዝርዝር (ሀ = 0)
	{
		ከሆነ ሀ <= ስንት {
			ስ()፤
			ዝርዝር(ሀ +1)፤
		}፤
	}፤
}፤


ሀ = ኤሊ()፤

ደጋግም( 5፣ ስራ() {
	ደጋግም(5፣ ስራ() {
		ወደፊት(ሀ፣ 36)፤
		ግራ(ሀ፣ 72)፤
		})፤
		ግራ(ሀ፣ 72)፤
	}
)፤

```
