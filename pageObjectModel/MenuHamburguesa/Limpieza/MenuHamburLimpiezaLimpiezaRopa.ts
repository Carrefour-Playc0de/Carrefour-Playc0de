import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaLimpiezaDeRopa extends BasePage {

    readonly LIMPIEZA_DE_ROPA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        // this.LIMPIEZA_DE_ROPA = this.page.locator('menu-item-category-limpieza-ropa')
        this.LIMPIEZA_DE_ROPA = this.page.locator("(//div[contains(text(),'Limpieza de la ropa')])[1]")
    }

    async clickLimpiezaLimpiezaDeRopa(): Promise<void> {
        await this.click(this.LIMPIEZA_DE_ROPA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburLimpiezaLimpiezaDeRopa(): Promise<void> {
        await this.clickLimpiezaLimpiezaDeRopa()
    }
}
