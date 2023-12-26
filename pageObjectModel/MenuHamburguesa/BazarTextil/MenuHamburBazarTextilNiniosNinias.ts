import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilNiniosNinias extends BasePage {

    readonly NINIOS_NINIAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.NINIOS_NINIAS = this.page.locator('//a [@id="menu-item-category-niños-y-niñas"]')
    }

    async clickBazarTextilNiniosNinias(): Promise<void> {
        await this.click(this.NINIOS_NINIAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilNiniosNinias(): Promise<void> {
        await this.clickBazarTextilNiniosNinias()
    }
}
