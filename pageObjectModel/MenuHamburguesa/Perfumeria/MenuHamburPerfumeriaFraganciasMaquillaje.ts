import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaFraganciasMaquillaje extends BasePage {

    readonly FRAGANCIAS_MAQUILLAJE: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.FRAGANCIAS_MAQUILLAJE = this.page.locator('//* [@id="menu-item-category-fragancias-y-maquillajes"]')
    }

    async clickPerfumeriaFraganciasMaquillaje(): Promise<void> {
        await this.click(this.FRAGANCIAS_MAQUILLAJE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaFraganciasMaquillaje(): Promise<void> {
        await this.clickPerfumeriaFraganciasMaquillaje()
    }
}
