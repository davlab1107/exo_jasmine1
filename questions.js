var CreationTableauLangages = function () {
var languages = ["Html","CSS","Java","PHP"];
  return languages;
}

var CreationTableauNombres = function () {
var nombres = [0,1,2,3,4,5];
    return nombres;
}

var RemplacementElement = function (langages) {
 var langages = ["Html","CSS","Javascript","PHP"];
  return langages;
}

var AjoutElementLangages = function (langages) {
           var langages = ["Html", "CSS", "Javascript", "PHP", "Ruby", "Python"];
  return langages;
}

var AjoutElementNombres = function (nombres) {
var nombres = [0,1,2,3,4,5];
nombres.unshift(-2,-1);
  return nombres;
}

var SuppressionPremierElement = function (langages) {
var langages = ["CSS","Javascript","PHP","Ruby","Python"];
langages.shift();
  return langages;
}

var SuppressionDernierElement = function (langages) {
var langages = ["CSS", "Javascript", "PHP", "Ruby"];
  return langages;
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
var reseaux_sociaux_chaine = ["Facebook","Twitter","Google +","Viadeo","LinkedIn"];
  return reseaux_sociaux_chaine;
}

var ConversionTableauChaine = function (langages) {
langages_chaine = langage.join();
return langages_chaine;
}

var TriTableau = function (reseaux_sociaux) {
reseaux_sociaux.sort();
  return reseaux_sociaux;
}

var InversionTableau = function (reseaux_sociaux){
    langages.reverse();
return langages;
}
