
import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosSalaminesEmbutidos extends BasePage {

    readonly SALAMINES_EMBUTIDOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.SALAMINES_EMBUTIDOS = this.page.locator('//a [@id="menu-item-category-salamines-embutidos"]')
    }

    async clickLacteosProdsFrescosSalaminesEmbutidos(): Promise<void> {
        await this.click(this.SALAMINES_EMBUTIDOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosSalaminesEmbutidos(): Promise<void> {
        await this.clickLacteosProdsFrescosSalaminesEmbutidos()
    }
}
