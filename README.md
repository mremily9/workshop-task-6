# FA205_Workshop_6

Website link: https://mremily9.github.io/workshop-task-6/


# Overview
- I looked into creating a nonsense poem generator with the use of the RiTa.js library
- Using at least 3 functions from the RiTa.js library to create this poem
- Looking into using the rita functions of:
  - RiTa.rhymes()
  - Rita.soundsLike()
  - RiTa.spellsLike()
  - Rita.random() 
- Learnt how to add a library into my project and implement it
- Expanded on the previous workshop four on interaction with an interactive poem that changes the word that rhymes and random works in the whole poem every few seconds

  
# Notes


![image](https://github.com/user-attachments/assets/de4f1ab8-fc8e-408f-aeec-a7f6699c3346)

Basic set up from the workshop video 

![image](https://github.com/user-attachments/assets/f4dd4bd5-2fd0-4938-b5c1-6cd16cc30517)

Using a library and how to import it 

![image](https://github.com/user-attachments/assets/65aa010b-7e12-47d9-9cc3-420b0ddd2958)

https://rednoise.org/rita/ 

![image](https://github.com/user-attachments/assets/28489bd8-66ed-4df4-b2d2-3b3801f3fc6c)

https://github.com/dhowe/ritajs/

![image](https://github.com/user-attachments/assets/1b359031-a159-446a-8136-c05f84d37153)

Example of using RiTa

![image](https://github.com/user-attachments/assets/6d2cb8f2-e24b-465e-9026-4e809ef34d0a)


Comments while following the workshop video. 



# Progress (Problem Solving/Code)
**Creating base**

I started off with following the workshop and its base set-up of creating a poem with the user interacting by making a new line 

![image](https://github.com/user-attachments/assets/004d6218-72b0-40a8-bf8c-47fb44965acb)
![image](https://github.com/user-attachments/assets/c0aec497-6195-4f4d-ad0f-7fd1ffcdd0ea)

**Changing fonts** 
I looked on google fonts to then pick out one I liked for this experiment 
I landed on this one: https://fonts.google.com/specimen/IM+Fell+English+SC?categoryFilters=Feeling:%2FExpressive%2FVintage

![image](https://github.com/user-attachments/assets/282131cb-e91e-4a6f-956b-b1841b3907f7)

![image](https://github.com/user-attachments/assets/42327aac-c6c3-4288-881e-f8821dea4a42)



**Experimenting** 
I then started to experiment by looking at the examples given to us on the RiTa site 

![image](https://github.com/user-attachments/assets/12984bd8-6462-4a91-82fc-055f1a0063a0)

I found the replaceable writing one to be very interesting, and so I wanted to implement it into my own code. 

![image](https://github.com/user-attachments/assets/a6d70775-9c82-4895-b12e-a81e4591c956)
https://rednoise.org/rita/examples/p5/ReplaceableWriting/

I didn't want to just copy the code in and pray it works - I also felt that I wasn't learning or experimenting had I done that. So instead I looked into the source code and took notes on what it did and what things I could take from it rather than the whole thing. 

![image](https://github.com/user-attachments/assets/13c34f1f-05b1-49a0-8d28-9f35c46ece66)

From this I got to learn about an async function existing and creating one. 

My first attempts of implementing this wasn't the best. Having the same line repeated over and over - as if it was stuck in a loop. 

![image](https://github.com/user-attachments/assets/1fba527d-c84c-4ac8-b363-952d89d85d8f)

And then It would work but the words would overlap - this is due to the words changing however, I didn't put a background within the draw() function to cover up the text after it had changed for each frame

![image](https://github.com/user-attachments/assets/06ca1400-68da-41c3-a1c7-c4016d83ecfc)

Once I was getting it to work, the format of the output poem was in a block of text - this was due to the replacement text functions output being all of the text at once rather than line by line like in the original base code from the workshop. 

![image](https://github.com/user-attachments/assets/72decb61-32fe-414f-b0cf-def8c8ad5749)

And so I fixed this issue by adding in a "\n" before the new line was added in 

![image](https://github.com/user-attachments/assets/2caf46eb-5330-4fc5-8d15-e4118350764a)

I then looked into making everything the same type - capital vs not as its very jarring with this font. 

![image](https://github.com/user-attachments/assets/7d72be74-6bb6-4015-bcd2-3e798ec49be0)



**Final coding comments**
- I got to learn about adding in libiries and suing them in p5.js - which I find to be very useful and I can implement this into my future works
- Overall coding thoughts on this project was a lot of debugging - however it didn't feel like there was much experimentation due to the nature of it being words 

# Future development 
- Perhaps looking into just using more the of Rita library so that I can learn more of and implement in a different ways rather than just changing words - maybe analysing words etc 
- Maybe looking into adding visual elements as well as the written parts, having the text be part of something visual 

# Reflection
-  I felt like I didn't experiment heavily with this project, however, I wasn't too certain on what else I could implement due to the fact that it was a mainly text-based project
-  I still found this project fun, as I wouldnt work with text that much as I like experimenting in more visual manners more 
