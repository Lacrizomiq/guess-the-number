import readlineSync from 'readline-sync';

// Nos fonctions vont utiliser la méthode `prompt`
// J'utilise une librairie afin que `prompt` soit synchrone pour éviter d'avoir besoin
// De gérer l’asynchrone dans mes fonctions
export function prompt(question) {
  // readlineSync.question returns the user's input once they hit enter
  const answer = readlineSync.question(question);

  return answer;
}
