import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburFrutasVerdurasFrutas extends BasePage {

    readonly FRUTAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.FRUTAS = this.page.locator('//a [@id="menu-item-category-frutas"]')
    }

    async clickFrutasVerdurasFrutas(): Promise<void> {
        await this.click(this.FRUTAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburFrutasVerdurasFrutas(): Promise<void> {
        await this.clickFrutasVerdurasFrutas()
    }
}
