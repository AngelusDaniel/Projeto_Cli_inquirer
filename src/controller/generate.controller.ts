import shellJs from "shelljs";
import fs from "node:fs";
import { EchoicesBoilerPlate } from "enum/choices.boilerplater.enum";
import { EGitName } from "enum/git-name.enum";
import { IAnswers } from "interface/answrs.interface";
import path from "path";

class GenerateController{
  public gen(answers: IAnswers){
    try {
      switch (answers.tech) {
        case EchoicesBoilerPlate.NODEJS_TS:
          this._execPath(EGitName.NODEJS_TS, answers.folderName)
          
          break;

        case EchoicesBoilerPlate.SCSS:
          this._execPath(EGitName.SCSS, answers.folderName)
          break;
    
      }
    } catch (error) {
      console.log(error)
    }
  }

  private _execPath(gitName: string, folderName: string){
    try {
      shellJs.cd(path.resolve());
      shellJs.exec(`git clone https://github.com/troquatte/${gitName}.git`)

      fs.renameSync(
        `${path.join(path.resolve(), gitName)}`,
        `${path.join(path.resolve(), folderName)}`
      )

      console.log("Arquivo criado com sucesso");
      return shellJs.exit();
    } catch (error) {
      console.log(error)
    }
  }
}

export const GenFile = new GenerateController();