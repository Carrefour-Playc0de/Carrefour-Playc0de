import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilMesasEscritorios extends BasePage {

    readonly MESAS_ESCRITORIOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MESAS_ESCRITORIOS = this.page.locator('//a [@id="menu-item-category-mesas-escritorios"]')
    }

    async clickBazarTextilMesasEscritorios(): Promise<void> {
        await this.click(this.MESAS_ESCRITORIOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilMesasEscritorios(): Promise<void> {
        await this.clickBazarTextilMesasEscritorios()
    }
}
