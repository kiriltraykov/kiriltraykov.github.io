
function choice(arr){
  return arr[Math.floor(Math.random() * arr.length)]
}

var poem = choice(poemDetails);
var color = choice(titleColors);

var titleColors = [
"#d6641b",
"#516735",
"#c4776e",
"#bfddde",
"#faf691",
"#781f1f",
"#6c0d6d",
"#007dc6",
"#ffc220",
"#004c91",
"#d6a36e"]


var poemDetails = [

{title: "Another Air", 
 body: "the horse’s nostrils breathe.\
		And the moist eye\
		is half-shut on purpose\
		Since he knows,\
		why does he need to see?\
		Only the habit\
		still prevents him\
		from rattling his hoofs\
		towards the stars.",
author: "Vanya Angelova",
translator: "Katerina Stoykova-Klemer"},


{title: "I assume a comfortable position",
 body: "on the couch, the pillow, the fluffy blanket,\
		the books.\
		The lighting is also good.\
		Nobody enters,\
		though I don’t lose hope\
		that someone would come in and say\
		with reproach:\
		this government also fell,\
		yet you’re reading Lao Tzu.\
		To which I’d answer:\
		exactly.",
author: "Ekaterina Yosifova",
translator: "Katerina Stoykova-Klemer"},


{title: "Word Web",
body:  "Since we are\
		more or less connected,\
		with more or less visible\
		colorful threads,\
		to the heads, pockets, genitals,\
		clothes, tongues and so on\
		\
		a beautiful cobweb conjoining\
		and still after all\
		skipping someone\
		and why\
		and who\
		\
		I hope,\
		me too.",
author: "Ekaterina Yosifova",
translator: "Katerina Stoykova-Klemer"},


{title: "Day and Night",
body:  "Like a shiny beetle smeared\
		on the pavement\
		the day softly darkens\
		under footfall of the hours;\
		your silence\
		loses its spark—\
		it doesn’t stab me every time\
		when my telephone turns\
		deaf and dumb.\
		Again the dark slips on\
		its black overcoat,\
		but I pin\
		white solitude in my hair\
		so I can dance barefoot\
		across\
		the well-beaten dance floor\
		of our love.",
author: "Zhivka Ivanova",
translator: "Christopher Buxton"},


{title:"Early August",
body:  "is red\
		red like watermelon\
		that we eat by the road\
		the car doors are open\
		some sit with their legs stretched out\
		bent over careful\
		not to stain their clothes\
		others are outside standing\
		spitting seeds\
		the road is roaring\
		the sun burns red\
		but we have thrown\
		a cloth over the face of the past\
		and we calmly finish\
		the fruit that is dripping\
		red sticky juice\
		seeping seeping into the ground",
author: "Silvia Choleva",
translator: "Maria Vassileva"},


{title:"Smog",
body:  "industrial smog\
		outlines of botched\
		urbanization\
		like the palm of a fortune teller\
		\
		the meaning descends on a rope to\
		your eyelashes and it is as if you are on\
		the verge of crying\
		but please don’t\
		the subtext encapsulates the significant\
		the text hardly hints at it\
		the rest we will talk about without writing\
		down words\
		I love you satisfyingly easily\
		you are blindingly distant\
		I attract you\
		you repel me:\
		such simple rules of\
		mechanics",
author: "Rosen Kukushev",
translator: "Composed in English"},


{title:"Evening",
body:  "The rhythm\
		of the falling rain\
		is not mine.\
		\
		The sound of it\
		lulls us\
		to sleep\
		repeating,\
		certain,\
		and gray as rain.\
		\
		Love\
		is like that\
		when it falls\
		slowly\
		within me\
		washing out the lines\
		of your face\
		and I forget…\
		\
		You have a body.\
		\
		Remind me.",
author: "Holly Karapetkova",
translator: "Kiril Merjanski"},


{title:"The Wooden Spoon",
body:  "My mother cooked with it\
		                 & when she got sick\
		I cooked with it\
		                 & when I left\
		my father cooked with it\
		                 & when I came back\
		                 for a brief visit\
		                 to see\
		                 if I can love him\
		                 still\
		\
		I took the spoon\
		\
		                  & I haven’t\
		                 cooked since.",
author: "Katerina Stoykova-Klemer",
translator: "Composed in English"},


{title: "Portrait",
body:  "Sometimes she tells unbelievable stories.\  
		She eats the day in small bites.\
		She smiles in the darkness.\
		She is all sunshine and a few white clouds.\
		Sometimes she willingly lies down\
		in the plate of the everyday.\
		She doesn’t care either way.\
		There are no words.\
		There are no stories.\
		There is no darkness\
		worth\
		smiling in.\
		She’s so indifferent\
		that you wonder—\
		is this the calm before the storm,\
		or its eye?",
author: "Ivanka Mogilska",
translator: "Angela Rodel"},


{title: "Daybreak",
body:  "Face,\
		lonely jetty\
		where my suspicion breaks.\
		Hands,\
		in which I allow myself\
		to overflow.\
		Home,\
		where the days come\
		to visit, late morning\
		I awake\
		beside you still\
		damp with breath from beyond\
		tangled in the darkness\
		but alive to tears\
		flushed close to light:\
		thank you.",
author: "Dostena Anguelova-Lavergne",
translator: "Holly Karapetkova"},


{title: "Sugar",
body:  "She can’t cry\
		because her eyes\
		are cubes\
		     of sugar.",
author: "Blagosveta Pugyova",
translator: "Eireene Nealand and Ilya Kaminsky"}

]


