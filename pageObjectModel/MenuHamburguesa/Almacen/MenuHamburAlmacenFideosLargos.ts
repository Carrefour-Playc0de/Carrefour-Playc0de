import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenFideosLargos extends BasePage {

    readonly FIDEOS_LARGOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.FIDEOS_LARGOS = this.page.locator('//a [@id="menu-item-category-fideos-largos"]')
    }

    async clickAlmacenFideosLargos(): Promise<void> {
        await this.click(this.FIDEOS_LARGOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenFideosLargos(): Promise<void> {
        await this.clickAlmacenFideosLargos()
    }
}
