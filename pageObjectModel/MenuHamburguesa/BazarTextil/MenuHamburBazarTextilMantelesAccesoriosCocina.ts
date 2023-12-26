import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilMantelesAccesoriosCocina extends BasePage {

    readonly MANTELES_ACCESORIOS_COCINA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MANTELES_ACCESORIOS_COCINA = this.page.locator('//a [@id="menu-item-category-purificadores-repuestos"]')
    }

    async clickBazarTextilMantelesAccesoriosCocina(): Promise<void> {
        await this.click(this.MANTELES_ACCESORIOS_COCINA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilMantelesAccesoriosCocina(): Promise<void> {
        await this.clickBazarTextilMantelesAccesoriosCocina()
    }
}
