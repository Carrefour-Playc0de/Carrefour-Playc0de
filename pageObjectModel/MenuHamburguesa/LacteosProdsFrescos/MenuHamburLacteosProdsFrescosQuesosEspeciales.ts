import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosQuesosEspeciales extends BasePage {

    readonly QUESOS_ESPECIALES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.QUESOS_ESPECIALES = this.page.locator('//a [@id="menu-item-category-quesos-especiales"]')
    }

    async clickLacteosProdsFrescosQuesosEspeciales(): Promise<void> {
        await this.click(this.QUESOS_ESPECIALES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosQuesosEspeciales(): Promise<void> {
        await this.clickLacteosProdsFrescosQuesosEspeciales()
    }
}
