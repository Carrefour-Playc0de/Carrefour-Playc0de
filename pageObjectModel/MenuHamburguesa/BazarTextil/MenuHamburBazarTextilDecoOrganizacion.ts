import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilDecoOrganizacion extends BasePage {

    readonly DECO_ORGANIZACION: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.DECO_ORGANIZACION = this.page.locator('//a [@id="menu-item-category-deco-organizacion"]')
    }

    async clickBazarTextilDecoOrganizacion(): Promise<void> {
        await this.click(this.DECO_ORGANIZACION)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilDecoOrganizacion(): Promise<void> {
        await this.clickBazarTextilDecoOrganizacion()
    }
}
