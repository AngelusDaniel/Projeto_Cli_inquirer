#!/usr/bin/env node

import inquirer from 'inquirer';

//Questions
import { questions } from 'questions';

//interface
import { IAnswers } from 'interface/answrs.interface';
import { GenFile } from 'controller/generate.controller';





class Init{

  constructor(){

    inquirer.prompt(questions).then((answers: IAnswers)=> {

      GenFile.gen(answers);

    });

  }

}

new Init();
