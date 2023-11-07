const container = document.querySelector('#container');

const P = document.createElement('p');
P.textContent = "Hey I'm red!";
P.style.color = "red";

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

container.appendChild(P);
container.appendChild(h3);

const myDiv = document.createElement('div');
myDiv.setAttribute('style', 'background: pink; border: black 1px solid;');

    const anotherH = document.createElement('h1');
    anotherH.textContent = "I'm in a div!";
    const anotherP = document.createElement('p');
    anotherP.textContent = "ME TOO!";
    
    container.appendChild(myDiv);
    myDiv.appendChild(anotherH);
    myDiv.appendChild(anotherP);
    