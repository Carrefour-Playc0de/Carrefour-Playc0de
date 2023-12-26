import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilLibros extends BasePage {

    readonly LIBROS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LIBROS = this.page.locator('//a [@id="menu-item-category-libros"]')
    }

    async clickBazarTextilLibros(): Promise<void> {
        await this.click(this.LIBROS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilLibros(): Promise<void> {
        await this.clickBazarTextilLibros()
    }
}
