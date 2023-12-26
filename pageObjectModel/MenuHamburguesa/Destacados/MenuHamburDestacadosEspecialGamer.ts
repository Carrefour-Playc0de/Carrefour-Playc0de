import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDestacadosEspecialGamer extends BasePage {

    readonly ESPECIAL_GAMER: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ESPECIAL_GAMER = this.page.locator('//a [@id="menu-item-category-destacados-jugueteria-carrefour"]')
    }

    async clickDestacadosEspecialGamer(): Promise<void> {
        await this.click(this.ESPECIAL_GAMER)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDestacadosEspecialGamer(): Promise<void> {
        await this.clickDestacadosEspecialGamer()
    }
}
