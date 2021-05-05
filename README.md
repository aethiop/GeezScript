# [ግዕዝ / Ge'ez (beta)](https://geez.marda.studio) - Amharic programming language.

Geez is simple programming language which is built on top of JavaScript. An online IDE is also provided [here](https://geez.marda.studio). The website or even the language is not finished yet but has many functionalities which can be used.

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

OR

```
ሰይም ዝርዝር (ሀ = 0)
	{
		ከሆነ ሀ <= 2 {
			ፃፍ(ሀ)፤
			ዝርዝር(ሀ +1)፤
		}፤
	}፤
```

# Extra

፩

```
ወረቀት()፤

ሀ = ስፋት/2፤
ቀያሪ = 3፤

አንቀሳቅስ = ስራ() {
	ፍሬም(አንቀሳቅስ)፤
    አጥፋ(0፣ 0፣ ስፋት፣ ርዝመት)፤
	ቀባ(105፣240፣114)፤
	ክብ(ሀ፣ ርዝመት/2፣ 30)፤
    ከሆነ ((ሀ + 30) > ስፋት || (ሀ-30) < 0)
    {
		ቀያሪ = ቀያሪ * -1፤
    }፤
    ሀ = ሀ + ቀያሪ፤
}፤

አንቀሳቅስ()፤
```

፪

```
ወረቀት()፤

አንቀሳቅስ = ስራ() {
	ፍሬም(አንቀሳቅስ)፤
    አጥፋ(0፣0፣ ስፋት፣ ርዝመት)፤
    ቀባ(244፣ 122፣ 200፣ 0.8)፤
	ክብ(የት_አግድም፣ የት_ሽቅብ፣ 30)፤
}፤

አንቀሳቅስ()፤
```

```
ዘርዝር = ስራ (ሀ፣ ለ፣ ስ)
		{
        	ከሆነ (ሀ < ለ || ለ < ሀ) {
            	ዘርዝር(ሀ+ስ፣ ለ፣ ስ)፤
            }፤
       	}፤
ፃፍ(ዘርዝር(20፣1፣ -1))፤
```

```
ሰይም (ሀ = 2) {
	ፃፍ(ሀ + ሀ)፤
    ሰይም (ሀ = 4) {
    	ፃፍ(ሀ + ሀ)፤
    }፤
    ፃፍ(ሀ+ሀ)፤
}፤
```

```
ወረቀት()፤

አግድም = ስፋት/2፤
ሽቅብ = ርዝመት/2፤
ስበት = 1፤
ፍሪክሽን = 0.98፤
ሬዲየስ = 40፤
ቀ = 1፤

ኳስ = ስራ (ሀ፣ ለ፣ ሐ) {
	  ያለ_መስመር()፤
      ቀባ(105፣240፣114)፤
      ክብ(ሀ፣ ለ፣ ሐ)፤
}፤

አንቀሳቅስ = ስራ() {
	ፍሬም(አንቀሳቅስ)፤
    ጀርባ(12፣ 12፣ 12፣ 0.07)፤
    ኳስ(አግድም ፣ ሽቅብ ፣ ሬዲየስ)፤

    ከሆነ ((ሽቅብ + ሬዲየስ) > ርዝመት || (ሽቅብ-30) < 0)
    	ከዛ ቀ = ቀ * ፍሪክሽን* -1
    ካልሆነ ቀ = ቀ + ስበት፤
    ሽቅብ = ሽቅብ + ቀ፤

}፤

አንቀሳቅስ()፤
```

```


# ክፍል ሁለት ነገር ተቀብሎ ስራ(ፉንችቲኦን) ይመልሳል።

ክፍል = ስራ (ሀ፣ ለ) ስራ(ስ) ስ(ሀ ፣ ለ)፤

# ብጀ -- ክፍል ይቀበልና የመጀመርያውን ባለቤት ይምልሳል።
ብጀ = ስራ (ክፍል) ክፍል(ስራ(ሀ ፣ ለ) ሀ)፤

# ብቀ -- ክፍል ይቀበልና ቀጣዩን ባለቤት ይመልሳል።
ብቀ = ስራ (ክፍል) ክፍል(ስራ(ሀ ፣ ለ) ለ)፤

# ባዶ -- ባዶ ስራ(function) ይመልሳል።
# ይህ የሚጠቅመው መጨረሻውን ለመቆጣጠር ነው።
ባዶ = ስራ (ስ) ስ(ባዶ፣ ባዶ)፤

# ዝርዝር አይነት
ሀ = ክፍል(1፣ ክፍል(2፣ ክፍል(3፣ ባዶ)))፤
ፃፍ(ብጀ(ሀ))፤
ፃፍ(ብጀ(ብቀ(ሀ)))፤
ፃፍ(ብጀ(ብቀ(ብቀ(ሀ))))፤

```

```


ክፍል = ስራ (ሀ፣ ለ)
		ስራ(መ፣ ዐ፣ አ)
        	ከሆነ መ == "ግባ"
            	ከዛ
                	ከሆነ ዐ == 0
                    	ከዛ ሀ
                    ካልሆነ ለ
            ካልሆነ
            	ከሆነ ዐ == 0
                	ከዛ ሀ = አ
                ካልሆነ ለ = አ፤


ብጀ = ስራ (ክፍል)
		ክፍል("ግባ"፣ 0)፤

ብቀ = ስራ (ክፍል)
		ክፍል("ግባ"፣ 1)፤

ብጀቀ = ስራ (ክፍል፣ምን)
			ክፍል("ሰይም"፣ 0፣ ምን)፤
ብቀቀ = ስራ (ክፍል፣ምን)
			ክፍል("ሰይም"፣ 1፣ ምን)፤

ባዶ = ክፍል(0፣0)፤


ለያንዳንዱ = ስራ(ክፍሎች፣ ስ)
			ከሆነ (ክፍሎች != ባዶ){
            	ስ(ብጀ(ክፍሎች))፤
                ለያንዳንዱ(ብቀ(ክፍሎች)፣ ስ)፤
            }፤

ዘርዝር = ስራ(ሀ፣ ለ)
 			ከሆነ ሀ <= ለ ከዛ ክፍል(ሀ፣ ዘርዝር(ሀ+1፣ ለ)) ካልሆነ ባዶ፤

# ምሳሌ
ሀ = ክፍል(1፣ ክፍል(2፣ ክፍል(3፣ ባዶ)))፤
ለያንዳንዱ(ሀ፣ ፃፍ)፤
ፃፍ("--------")፤
ለያንዳንዱ(ሀ፣ ስራ(ሀ) ፃፍ(ሀ*2))፤
ፃፍ("--------")፤
ለያንዳንዱ(ዘርዝር(1፣20)፣ ፃፍ)፤
```

```
ወረቀት()፤


ኳስ = ስራ (ሀ፣ ለ፣ ሐ) {
      ሰይም (አግድም = ሀ ፣ ሽቅብ = ለ ፣ ሬዲየስ = ሐ፣ ስበት = 1፣ ፍሪክሽን = 0.98፣ ሬዲየስ = 40፣ ቀ = 1) {
        ቀባ(105፣240፣114)፤
        ክብ(ሽቅብ፣ አግድም ፣ ሬዲየስ)፤
        ከሆነ ((ሽቅብ + 30) > ርዝመት || (ሽቅብ-30) < 0)
        {
        	ፃፍ(ቀ)፤
          ቀ = ቀ * -1፤
        }፤
        ሽቅብ = ሽቅብ + ቀ፤
       }

}፤


አንቀሳቅስ = ስራ() {
	ፍሬም(አንቀሳቅስ)፤
    ኳስ(ስፋት/2፣ ርዝመት/2፣20)፤

}፤

አንቀሳቅስ()፤
```

```
ሜሞ = ስራ (ስ) {
	ሰይም (አለ = ሀሰት፣ መልስ = ስራ () {} ) {
    ስራ() {
    ፃፍ(አለ)፤
ከሆነ (አለ) ከዛ መልስ፤
        አለ = እውነት፤
        መልስ = ስ()፤
        መልስ፤
    }፤
    }፤
}፤

ሀ = ሜሞ(ስራ() {
	ፃፍ("ለ")፤
    1፤
})፤
ፃፍ("ሀ")፤
ፃፍ(ሀ())፤
ፃፍ(ሀ())፤
ፃፍ(ሀ())፤


```

```
መጀመሪያ = 1፤
መጨረሻ = 100፤

ገምት = ስራ() {
    (መጀመሪያ + መጨረሻ) >> 1፤
}፤

አነስ = ስራ() {
	መጨረሻ = ገምት() - 1፤
}፤

ጨመር = ስራ() {
	መጀመሪያ = ገምት() + 1፤
}፤

እንደአዲስ = ስራ() {
	መጀመሪያ = 1፤
    መጨረሻ = 100፤
    ገምት()፤
}፤
```

```
ቦርድ = ሰልፍ(" " ፣ " " ፣ " " ፣" " ፣ " " ፣ " " ፣ " " ፣ " " ፣ " ")፤
ተረኛ = "X"፤
ስንቴ = 0፤
አሸናፊ = 0፤
ቦርድ-ፃፍ = ስራ(ቦርድ) {

      ፃፍ(ከሰልፍ(ቦርድ፣ 0)፣ "|"፣ ከሰልፍ(ቦርድ፣ 1)፣ "|"፣ ከሰልፍ(ቦርድ፣ 2))፤
      ፃፍ("--+---+--")፤
      ፃፍ(ከሰልፍ(ቦርድ፣ 3)፣ "|"፣ ከሰልፍ(ቦርድ፣ 4)፣ "|"፣ ከሰልፍ(ቦርድ፣ 5))፤
      ፃፍ("--+---+--")፤
      ፃፍ(ከሰልፍ(ቦርድ፣ 6)፣ "|"፣ ከሰልፍ(ቦርድ፣ 7)፣ "|"፣ ከሰልፍ(ቦርድ፣ 8))፤
}፤

መጫወቻ-ተቀበል = ስራ() {
	ሰይም (የት) {
    	የት = ተቀበል("(1-9) > ")፤
        ወደ-ቁጥር(የት)፤
    }፤
}፤

መጫወቻ-አንብብ = ስራ (የት) {
	ከሆነ የት > 0 && የት < 10 {
    	የት - 1፤
	}፤
}፤

ተጫዋች-ቀይር = ስራ(ተ) ከሆነ (ተ == "X")	ከዛ "O" ካልሆነ "X"፤

መጫወቻ-ፃፍ = ስራ(የት) {

	ከሆነ (ከሰልፍ(ቦርድ፣ የት) == " "){
    	ሰልፍ!(ቦርድ፣ የት፣ ተረኛ)፤
        ተረኛ = ተጫዋች-ቀይር(ተረኛ)፤
        ስንቴ = ስንቴ + 1፤
    }
    ካልሆነ{
    	ፃፍ("ኧረ አይቻልም10።")፤
    }፤

    ከሆነ (ስንቴ >= 5){
    	ከሆነ (ከሰልፍ(ቦርድ፣ 0) == ከሰልፍ(ቦርድ፣ 1) == ከሰልፍ(ቦርድ፣ 2)  != " ")
        	ከዛ ፃፍ("አሸናፊ ተገኝቷል "፣ ተጫዋች-ቀይር(ተረኛ))
        ካልሆነ ከሆነ (ከሰልፍ(ቦርድ፣ 3) == ከሰልፍ(ቦርድ፣ 4) == ከሰልፍ(ቦርድ፣ 5) != " ")
        	ከዛ ፃፍ("አሸናፊ ተገኝቷል "፣ ተጫዋች-ቀይር(ተረኛ))
        ካልሆነ ከሆነ (ከሰልፍ(ቦርድ፣ 6) == ከሰልፍ(ቦርድ፣ 7) == ከሰልፍ(ቦርድ፣ 8) != " ")
        	ከዛ ፃፍ("አሸናፊ ተገኝቷል "፣ ተጫዋች-ቀይር(ተረኛ))
        ካልሆነ ከሆነ (ከሰልፍ(ቦርድ፣ 0) == ከሰልፍ(ቦርድ፣ 4) == ከሰልፍ(ቦርድ፣ 6) != " ")
        	ከዛ ፃፍ("አሸናፊ ተገኝቷል "፣ ተጫዋች-ቀይር(ተረኛ))
        ካልሆነ ከሆነ (ከሰልፍ(ቦርድ፣ 1) == ከሰልፍ(ቦርድ፣ 5) == ከሰልፍ(ቦርድ፣ 7) != " ")
        	ከዛ ፃፍ("አሸናፊ ተገኝቷል "፣ ተጫዋች-ቀይር(ተረኛ))
        ካልሆነ ከሆነ (ከሰልፍ(ቦርድ፣ 3) == ከሰልፍ(ቦርድ፣ 6) == ከሰልፍ(ቦርድ፣ 8) != " ")
        	ከዛ ፃፍ("አሸናፊ ተገኝቷል "፣ ተጫዋች-ቀይር(ተረኛ))
        ካልሆነ ከሆነ (ከሰልፍ(ቦርድ፣ 0) == ከሰልፍ(ቦርድ፣ 5) == ከሰልፍ(ቦርድ፣ 8) != " ")
        	ከዛ ፃፍ("አሸናፊ ተገኝቷል "፣ ተጫዋች-ቀይር(ተረኛ))
        ካልሆነ ከሆነ (ከሰልፍ(ቦርድ፣ 3) == ከሰልፍ(ቦርድ፣ 5) == ከሰልፍ(ቦርድ፣ 6) != " ")
        	ከዛ ፃፍ("አሸናፊ ተገኝቷል "፣ ተጫዋች-ቀይር(ተረኛ))
    }፤
    ከሆነ ስንቴ == 9 ከዛ ፃፍ("እኩል ናችሁ።")፤
}፤

ጌም = ስራ() {
	ቦርድ-ፃፍ(ቦርድ)፤
	መጫወቻ-ፃፍ(መጫወቻ-አንብብ(መጫወቻ-ተቀበል()))፤

    ጌም()፤
}፤

ጌም()፤
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

ሀ = ኤሊ()፤
ለ = ኤሊ()፤
አራት-ማዕዘን = ስራ(ኤ፣ ጎን) {
	ደጋግም(4፣ ስራ() {
          ወደፊት(ኤ፣ ጎን)፤
          ግራ(ኤ፣ 90)፤
	})፤
  }፤
አራት-ማዕዘን(ሀ፣ 50)፤


አራት-ማዕዘን(ሀ፣ 100)፤
አራት-ማዕዘን(ለ፣ 50)፤
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

ለያንዳንዱ = ስራ(ሀ፣ ለ፣ ሐ፣ ስ) {
  	ሰይም ዘርዝር (ው = ሀ){
          ከሆነ ው < ለ {
            ስ(ው)፤
            ዘርዝር(ው + ሐ)፤
            }፤
          }
  }፤




#ፎር [ኢ 100 10 -10] [ረፐኣት 5 [ረፐኣት 5 [ፍድ :ኢ ልት 72] ልት 72]]



ሀ = ኤሊ()፤
ለያንዳንዱ( 100፣ 10፣ - * 10፣ ስራ(መ) {

  ደጋግም( 5፣ ስራ() {
    	ደጋግም(5፣ ስራ() {
          	ወደፊት(ሀ፣ መ)፤
          	ግራ(ሀ፣ 72)፤
          }፤
        ግራ(ሀ፣ 72)፤
    }፤
  }፤

```