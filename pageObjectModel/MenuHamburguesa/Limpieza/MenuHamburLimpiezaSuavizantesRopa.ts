import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLimpiezaSuavizantesRopa extends BasePage {

    readonly SUAVIZANTES_ROPA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        // this.SUAVIZANTES_ROPA = this.page.locator('//a [@id="menu-item-category-suavizantes-ropa"]')
        this.SUAVIZANTES_ROPA = this.page.locator("(//div[contains(text(),'Suavizantes para la ropa')])[1]")
    }

    async clickLimpiezaSuavizantesRopa(): Promise<void> {
        await this.click(this.SUAVIZANTES_ROPA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburLimpiezaSuavizantesRopa(): Promise<void> {
        await this.clickLimpiezaSuavizantesRopa()
    }
}
