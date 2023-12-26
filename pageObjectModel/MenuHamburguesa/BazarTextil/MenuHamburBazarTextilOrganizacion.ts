import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilOrganizacion extends BasePage {

    readonly ORGANIZACION: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ORGANIZACION = this.page.locator('//a [@id="menu-item-category-organizacion"]')
    }

    async clickBazarTextilOrganizacion(): Promise<void> {
        await this.click(this.ORGANIZACION)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilOrganizacion(): Promise<void> {
        await this.clickBazarTextilOrganizacion()
    }
}
