const EXPRESSION_KEY = 'expression';
            let expression = localStorage.getItem(EXPRESSION_KEY)
                || '';
            
            function displayExpression(){
                const expressionElement = document.getElementById('expression');
                if(!expressionElement){
                    console.log('Expression element not found');

                    return;
                }

                expressionElement.innerText = expression;
            }

            function displayExpressionResult(expressionResult){
                const expressionResultElement = document.getElementById('expression-result');
                if(!expressionResultElement){
                    console.log('Expression result element not found');

                    return;
                }

                if(!expressionResult){
                    expressionResultElement.innerText = '';
                }else{
                    expressionResultElement.innerText = `= ${expressionResult}`;
                }
            }

            function addToExpression(term){
                expression += term;
                setExpressionLocalStorage();
                logExpression();
                displayExpression();
            }
            
            function setExpressionLocalStorage(){
                localStorage.setItem(EXPRESSION_KEY, expression);
            }
            
            function removeTermLast(){
                expression = expression.slice(0, -1);
                setExpressionLocalStorage();
                logExpression();
                displayExpression();
            }
            
            function clearExpression(){
                expression = '';
                setExpressionLocalStorage();
                console.log('Expression was reset');
                logExpression();
                displayExpression();
                displayExpressionResult('');
            }

            function logExpression(){
                console.log(`${expression}`)
            }

            function evaluateExpression(){
                let result = '';
                try {
                    result = eval(expression);
                    displayExpressionResult(result);
                    console.log(`Result: ${result}`);
                } catch (error) {
                    alert("The expression is not valid. Try enter valid expression");
                }

            }