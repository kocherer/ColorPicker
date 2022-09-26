        var redInput,
        greenInput,
        blueInput,
        sumRgb,
        pho,
        gamma,
        beta,
        lumi;

        redInput = window.prompt("Enter your red value (0 - 1)");
        greenInput = window.prompt("Enter your green value (0 - 1)");
        blueInput = window.prompt("Enter your blue value (0 - 1)");
        
        redInput = parseInt(redInput);
        greenInput = parseInt(greenInput);
        blueInput = parseInt(blueInput);
        convert(redInput,greenInput,blueInput);

        function convert(redInput,greenInput,blueInput){
            var sumRgb = redInput + greenInput + blueInput;
            var pho = 1/sumRgb * (redInput, greenInput, blueInput);
            var gamma = 1/sumRgb * (redInput, greenInput, blueInput);
            var beta = 1/sumRgb * (redInput, greenInput, blueInput);
            var lumi = Math.max(redInput, greenInput, blueInput);
            window.alert("Your converted RGB:" + "\n" + 
                         "Pho = " + pho + "\n" + 
                         "Gamma = " + gamma + "\n" +
                         "Beta = " + beta + "\n" +
                         "Lumi = " + lumi);
                
        }
