https://teachablemachine.withgoogle.com/models/bt-gSF-SN/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bt-gSF-SN/model.json', modelReady);
}

function modelReady(){
    classifier.classify( gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) +1;
        random_number_g = Math.floor(Math.random() * 255) +1;
        random_number_b = Math.floor(Math.random() * 255) +1;

        document.getElementById("result_label").innerHTML = 'Posso ouvir - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('leia');
        img1 = document.getElementById('darth_vader');
        img2 = document.getElementById('chewbacca');
        img3 = document.getElementById('r2d2');

        if (results[0].label == "chewbacca"){
            img.src = 'leia.webp';
            img1.src = 'darth vader.webp';
            img2.src = 'chewbacca gif.gif';
            img3.src = 'r2 d2.png';
        } else if (results[0].label == "palmas"){
            img.src = 'leia.webp';
            img1.src = 'darth vader.webp';
            img2.src = 'chewbacca.png';
            img3.src = 'r2d2 gif.gif';   
        } else if (results[0].label == "sabres de luz"){
            img.src = 'leia.webp';
            img1.src = 'darth vader gif.gif';
            img2.src = 'chewbacca.png';
            img3.src = 'r2 d2.png';
        } else if (results[0].label == "zíper"){
            img.src = 'leia gif.gif';
            img1.src = 'darth vader.webp';
            img2.src = 'chewbacca.png';
            img3.src = 'r2 d2.png';
        }
    }
}