import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenHarinasComunesLeudantes extends BasePage {

    readonly HARINAS_COMUNES_LEUDANTES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.HARINAS_COMUNES_LEUDANTES = this.page.locator('//a [@id="menu-item-category-harinas-comunes-leudantes"]')
    }

    async clickAlmacenHarinasComunesLeudantes(): Promise<void> {
        await this.click(this.HARINAS_COMUNES_LEUDANTES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenHarinasComunesLeudantes(): Promise<void> {
        await this.clickAlmacenHarinasComunesLeudantes()
    }
}
