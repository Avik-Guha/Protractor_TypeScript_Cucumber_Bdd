import { element, by } from 'protractor'
import { IdentificationType } from './BasePage_EN'

export class BasePage {
	ElementLocator(locator) {
		switch (locator.type) {
			case IdentificationType[IdentificationType.Xpath]:
				return element(by.xpath(locator.value))
			case IdentificationType[IdentificationType.Css]:
				return element(by.css(locator.value))
			case IdentificationType[IdentificationType.Id]:
				return element(by.id(locator.value))
			case IdentificationType[IdentificationType.href]:
				return element(by.linkText(locator.value))
			default:
				break
		}
	}

	ElementArrayLocator(locator) {
		switch (locator.type) {
			case IdentificationType[IdentificationType.XpathAll]:
				return element.all(by.xpath(locator.value))
			case IdentificationType[IdentificationType.CssAll]:
				return element.all(by.css(locator.value))
			default:
				break
		}
	}
}
