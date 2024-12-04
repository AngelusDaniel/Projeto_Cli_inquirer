import { EchoicesBoilerPlate } from "enum/choices.boilerplater.enum";
import path from "path";
import fs from "node:fs";
import { EErros } from "enum/errors.enum";
import { EGitName } from "enum/git-name.enum";

export const questions = [{
  type: "list",
  name: "tech",
  message: "Qual boilerplater devo criar?",
  choices: [EchoicesBoilerPlate.NODEJS_TS, EchoicesBoilerPlate.SCSS]
},
{
  type: "input",
  name: "folderName",
  message: "Qual o nome devo dar para Pasta do projeto?",
  validate(folderName: string){
    console.log(folderName);

    //folderName - Não pode ser Null
    if(!folderName) return EErros.ERROR_NULL;

    //Não podemos ter carateres especiais, exceto -, _, ' '
    if(/[^\w\s-]/.test(folderName))
      return EErros.ERROR_SPECIAL_CHARACTERS;

    //Não podemos deixar com o mesmo nome da Repo da GitHub 
    if(folderName === EGitName.NODEJS_TS || folderName === EGitName.SCSS)
      return EErros.ERROR_GIT_REPO_FOLDER;


    try {
      const dir = path.resolve(folderName);
      //pega o caminho e adiciona o folderName no final
      fs.accessSync(dir, fs.constants.R_OK);
      return EErros.ERROR_FOLDER_EXISTS;
    } catch (error) {}

    //Não pode existir o mesmo nome do foldername
    return true;
  }
}
];