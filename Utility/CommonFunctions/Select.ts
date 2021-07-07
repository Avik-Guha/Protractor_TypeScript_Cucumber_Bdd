/**
     * This class is used to select and test drop-downs in page layout
     * @author Avik Guha
     * 
     */

import {browser, by, element, ElementFinder, ElementArrayFinder, protractor } from "protractor";

var EC = protractor.ExpectedConditions;

export class Select {


    /**
     * This method is used to click on drop-down button
     * @author Avik Guha
     *
     */

    public async clickDropdown(dropdown:ElementFinder | ElementArrayFinder) {
        await dropdown.click();
        //await browser.sleep(9000);
    }

    public isMultiple(dropdown:ElementFinder | ElementArrayFinder, visibleText:string){
        console.log("returning all options  : "+visibleText)
        // select the option
        dropdown.getAttribute("multiple").then(function(multipleOrNot){
            if(multipleOrNot){
                return true
            }else{
                return false;
            }
        })
    }

    public getOptions(dropdown:ElementFinder | ElementArrayFinder, visibleText:string){
        console.log("returning all options  : "+visibleText)
        // select the option
        dropdown.all(by.css("option"))
    }

    public async selectByVisibleText(dropdown:ElementFinder | ElementArrayFinder, visibleText:string){
        await console.log("Selecting element based text  : "+visibleText)
        // select the option
        await dropdown.element(by.xpath("//option[contains(text(), '"+visibleText+"')]")).click();
        await browser.sleep(1000);
    }

    public async selectMultipleByVisibleText(dropdown:ElementFinder | ElementArrayFinder, visibleText:string[]){
        const x: number = visibleText.length;

        await browser.actions().keyDown(protractor.Key.CONTROL).perform();
    
        // select the option
        for(let i=0; i<x; i++){
            const valueToSelect: string = visibleText[i];
            await dropdown.element(by.xpath("//option[contains(text(), '"+valueToSelect+"')]")).click();
        }
        
        //await browser.sleep(1000);
    }

    public async selectByValue(dropdown:ElementFinder | ElementArrayFinder, valueToSelect:string){
        console.log("Selecting element based value  : "+valueToSelect)
        // select the option
        await dropdown.element(by.xpath("//option[@value='"+valueToSelect+"']")).click();
        //await dropdown.element(by.css("option[value='"+value+"']")).click();
        //await browser.sleep(9000);
    }

    public async selectMultipleByValue(dropdown:ElementFinder | ElementArrayFinder, value:string[]){
        const x: number = value.length;

        await browser.actions().keyDown(protractor.Key.CONTROL).perform();
    
        // select the option
        for(let i=0; i<x; i++){
            const valueToSelect: string = value[i];
            await dropdown.element(by.xpath("//option[@value='"+valueToSelect+"']")).click();
        }
        
        //await browser.sleep(1000);
    }

    public selectByIndex(dropdown:ElementFinder | ElementArrayFinder, index:number){
        index = index+1;
        console.log("Selecting element based index : "+index)
        // select the option
        dropdown.element(by.css("option:nth-child("+index+")")).click()
    }
 }