import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenPicadillosPate extends BasePage {

    readonly PICADILLOS_PATE: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PICADILLOS_PATE = this.page.locator('//a [@id="menu-item-category-picadillos-pate"]')
    }

    async clickAlmacenPicadillosPate(): Promise<void> {
        await this.click(this.PICADILLOS_PATE)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenPicadillosPate(): Promise<void> {
        await this.clickAlmacenPicadillosPate()
    }
}
