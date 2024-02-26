import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburMundoBebeAceitesCremasLociones extends BasePage {

    readonly ACEITES_CREMAS_LOCIONES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ACEITES_CREMAS_LOCIONES = this.page.locator('//a [@id="menu-item-category-aceites-cremas-lociones"]')
    }

    async clickMundoBebeAceitesCremasLociones(): Promise<void> {
        await this.click(this.ACEITES_CREMAS_LOCIONES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburMundoBebeAceitesCremasLociones(): Promise<void> {
        await this.clickMundoBebeAceitesCremasLociones()
    }
}
