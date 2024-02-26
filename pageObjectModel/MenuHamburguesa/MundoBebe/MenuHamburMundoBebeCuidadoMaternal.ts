import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburMundoBebeCuidadoMaternal extends BasePage {

    readonly CUIDADO_MATERNAL: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CUIDADO_MATERNAL = this.page.locator('//a [@id="menu-item-category-cuidado-maternal"]')
    }

    async clickMundoBebeCuidadoMaternal(): Promise<void> {
        await this.click(this.CUIDADO_MATERNAL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburMundoBebeCuidadoMaternal(): Promise<void> {
        await this.clickMundoBebeCuidadoMaternal()
    }
}
