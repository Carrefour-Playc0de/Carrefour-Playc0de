import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaEsponjasOtrosAccesorios extends BasePage {

    readonly ESPONJAS_OTROS_ACCESORIOS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ESPONJAS_OTROS_ACCESORIOS = this.page.locator('//* [@id="menu-item-category-esponjas-accesorios"]')
    }

    async clickPerfumeriaEsponjasOtrosAccesorios(): Promise<void> {
        await this.click(this.ESPONJAS_OTROS_ACCESORIOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPerfumeriaEsponjasOtrosAccesorios(): Promise<void> {
        await this.clickPerfumeriaEsponjasOtrosAccesorios()
    }
}
