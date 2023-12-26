import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosQuesosRalladosEnHebras extends BasePage {

    readonly QUESOS_RALLADOS_EN_HEBRAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.QUESOS_RALLADOS_EN_HEBRAS = this.page.locator('//a [@id="menu-item-category-quesos-rayados-hebras"]')
    }

    async clickLacteosProdsFrescosQuesosRalladosEnHebras(): Promise<void> {
        await this.click(this.QUESOS_RALLADOS_EN_HEBRAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosQuesosRalladosEnHebras(): Promise<void> {
        await this.clickLacteosProdsFrescosQuesosRalladosEnHebras()
    }
}
