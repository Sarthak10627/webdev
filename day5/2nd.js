const incrementButton = document.getElementById('increment');
        const decrementButton = document.getElementById('decrement');
        const counterSpan = document.getElementById('counter');

        
        let counterValue = 0;

        
        const updateCounter = () => {
            counterSpan.textContent = counterValue;
        };

        
        incrementButton.addEventListener('click', () => {
            counterValue++;
            updateCounter();
        });

        
        decrementButton.addEventListener('click', () => {
            counterValue--;
            updateCounter();
        });
