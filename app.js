document.addEventListener('DOMContentLoaded',()=>{

    const cardArray = [


        {
            name:"calcium",
            img:"images/calcium.png"
        },
        {
            name:"calcium",
            img:"images/calcium.png"
        },



        {
            name:"carbon",
            img:"images/carbon.png"
        }
        ,
        {
            name:"carbon",
            img:"images/carbon.png"
        }
        ,



        {
            name:"hydrogen",
            img:"images/hydrogen.png"
        }
        ,
        {
            name:"hydrogen",
            img:"images/hydrogen.png"
        }
        ,



        {
            name:"nitrogen",
            img:"images/nitrogen.png"
        }
        ,
        {
            name:"nitrogen",
            img:"images/nitrogen.png"
        }
        ,


        {
            name:"oxygen",
            img:"images/oxygen.png"
        }
        ,
        {
            name:"oxygen",
            img:"images/oxygen.png"
        }
        ,



        {
            name:"phosphorus",
            img:"images/phosphorus.png"
        }
        ,
        {
            name:"phosphorus",
            img:"images/phosphorus.png"
        }
        ,



        {
            name:"potassium",
            img:"images/potassium.png"
        },
        {
            name:"potassium",
            img:"images/potassium.png"
        }
    ]

    cardArray.sort( ()=> 0.5-Math.random() )

    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    function createBoard(){
        for(let i =0; i < cardArray.length; i++ ){
            let card = document.createElement('img')
            card.setAttribute('src','images/blank.png')
            card.setAttribute('data-id',i)
            card.setAttribute('width','128px')
            card.setAttribute('height','128px')
            card.addEventListener('click',flipCard)
            grid.appendChild(card )

        }
    }

    function checkForMatch(){
         let cards = document.querySelectorAll('img')
         const optionOneId = cardsChosenId[0]
         const optionTwoId = cardsChosenId[1]
         console.log(optionOneId,optionTwoId)

         if(cardsChosen[0] === cardsChosen[1]){
             alert("Match")
             cards[optionOneId].setAttribute('src','images/white.png')
             cards[optionTwoId].setAttribute('src','images/white.png')
             cardsWon.push(cardsChosen)

         }
         else{
             cards[optionOneId].setAttribute('src','images/blank.png')
             cards[optionTwoId].setAttribute('src','images/blank.png')
             alert('Bummer')

         }
         cardsChosen = []
         cardsChosenId = []  
         resultDisplay.textContent = cardsWon.length
         if(cardsWon ===  cardArray.length/2){
              resultDisplay.textContent = 'Finished!!' 
         }
         
    }

    function flipCard(){
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch,500)
        }
    }
    
    createBoard()
})
