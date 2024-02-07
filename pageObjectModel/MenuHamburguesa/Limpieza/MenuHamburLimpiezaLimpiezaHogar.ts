import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaLimpiezaHogar extends BasePage {

    readonly LIMPIEZA_HOGAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LIMPIEZA_HOGAR = this.page.locator('//a [@id="menu-item-category-limpieza-hogar"]')
    }

    async clickLimpiezaLimpiezaHogar(): Promise<void> {
        await this.click(this.LIMPIEZA_HOGAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(7000)
    }

    async navigateToMenuHamburLimpiezaLimpiezaHogar(): Promise<void> {
        await this.clickLimpiezaLimpiezaHogar()
    }
}
